<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\Models\Phone;

class PhoneController extends Controller
{
    public function index() { // get
        $phones = DB::table('phone')
            ->leftJoin('student', 'phone.student_id', '=', 'student.id')
            ->select('phone.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->get();

        $data = [
            'phones' => $phones,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function totalPhone()
    {
        $total = Phone::count();

        $data = [
            'total_phones' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentPhones($student_id){
        $phones = DB::table('phone')
            ->leftJoin('student', 'phone.student_id', '=', 'student.id')
            ->select('phone.*')
            ->where('student.id', '=', $student_id)
            ->get();

        $data = [
            'phones' => $phones->isEmpty() ? "No phones for this student" : $phones,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentPhonesTotal($student_id){
        $total = DB::table('phone')
            ->leftJoin('student', 'phone.student_id', '=', 'student.id')
            ->where('student.id', '=', $student_id)
            ->count();

        $data = [
            'total' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    
    public function show($id) { // get { id } 
        $phone = DB::table('phone')
            ->leftJoin('student', 'phone.student_id', '=', 'student.id')
            ->select('phone.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->where('phone.id', '=', $id)
            ->first();

        $data = [
            'phone' => !$phone ? "This email doesn't exist " : $phone,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function store(Request $request)
    { // post
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'phone_type' => 'required',
            'country_code' => 'required',
            'area_code' => 'required',
            'student_id' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Some data is missing',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }

        $phone_new = Phone::create([
            'phone' => $request->phone,
            'phone_type' => $request->phone_type,
            'country_code' => $request->country_code,
            'area_code' => $request->area_code,
            'student_id' => $request->student_id
        ]);

        if (!$phone_new) {
            $data = [
                'message' => 'Error',
                'status' => 500
            ];

            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Phone asociado',
            'phone' => $phone_new,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    { // put 
        $phone_old = Phone::find($id);

        if (!$phone_old) {
            $data = [
                'message' => "This phone doesn't exist, you can't update them",
                'status' => 409
            ];

            return response()->json($data, 409);
        }

        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'phone_type' => 'required',
            'country_code' => 'required',
            'area_code' => 'required',
            'student_id' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Some data is missing',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }

        $phone_old->phone = $request->phone;
        $phone_old->phone_type = $request->phone_type;
        $phone_old->country_code = $request->country_code;
        $phone_old->area_code = $request->area_code;
        $phone_old->student_id = $request->student_id;

        $phone_old->save();

        $data = [
            'message' => 'Phone updated successfully',
            'phone' => $phone_old,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function delete($id)
    { // delete
        $phone = Phone::find($id);

        if (!$phone) {
            $data = [
                'message' => "This phone doesn't exist, you can't delete them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        $phone->delete();

        $data = [
            'message' => "Phone deleted successfully",
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
