<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\Models\Address;

class AddressController extends Controller
{
    public function index() { // get
        $address = DB::table('address')
            ->leftJoin('student', 'address.student_id', '=', 'student.id')
            ->select('address.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->get();

        $data = [
            'address' => $address,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function totalAddress()
    {
        $total = address::count();

        $data = [
            'total_address' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentAddress($student_id){
        $address = DB::table('address')
            ->leftJoin('student', 'address.student_id', '=', 'student.id')
            ->select('address.*')
            ->where('student.id', '=', $student_id)
            ->get();

        $data = [
            'address' => $address->isEmpty() ? "No addresses for this student" : $address,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentAddressTotal($student_id){
        $total = DB::table('address')
            ->leftJoin('student', 'address.student_id', '=', 'student.id')
            ->where('student.id', '=', $student_id)
            ->count();

        $data = [
            'total' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    
    public function show($id) { // get { id } 
        $address = DB::table('address')
            ->leftJoin('student', 'address.student_id', '=', 'student.id')
            ->select('address.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->where('address.id', '=', $id)
            ->first();

        $data = [
            'address' => $address,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function store(Request $request)
    { // post
        $validator = Validator::make($request->all(), [
            'address_line' => 'required',
            'city' => 'required',
            'zip_postcode' => 'required',
            'state' => 'required',
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
        $address_new = Address::create([
            'address_line' => $request->address_line,
            'city' => $request->city,
            'zip_postcode' => $request->zip_postcode,
            'state' => $request->state,
            'student_id' => $request->student_id
        ]);

        if (!$address_new) {
            $data = [
                'message' => 'Error',
                'status' => 500
            ];

            return response()->json($data, 500);
        }

        $data = [
            'message' => 'address created successfully',
            'address' => $address_new,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    { // put 
        $address_old = Address::find($id);

        if (!$address_old) {
            $data = [
                'message' => "This address doesn't exist, you can't update them",
                'status' => 409
            ];

            return response()->json($data, 409);
        }

        $validator = Validator::make($request->all(), [
            'address_line' => 'required',
            'city' => 'required',
            'zip_postcode' => 'required',
            'state' => 'required',
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

        $address_old->address_line = $request->address_line;
        $address_old->city = $request->city;
        $address_old->zip_postcode = $request->zip_postcode;
        $address_old->state = $request->state;
        $address_old->student_id = $request->student_id;

        $address_old->save();

        $data = [
            'message' => 'address updated successfully',
            'address' => $address_old,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function delete($id)
    { // delete
        $address = Address::find($id);

        if (!$address) {
            $data = [
                'message' => "This address doesn't exist, you can't delete them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        $address->delete();

        $data = [
            'message' => "address deleted successfully",
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
