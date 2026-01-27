<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Email;
use App\Models\Student;
use SebastianBergmann\Environment\Console;

class EmailController extends Controller
{
    public function index()
    { // get
        $emails = DB::table('email')
            ->leftJoin('student', 'email.student_id', '=', 'student.id')
            ->select('email.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->get();

            /**
             * select Email.email, email.email_type, student.first_name, student.last_name from email
             * left join student on email.student_id = student.id 
             * order by email.email;
             */

        $data = [
            'emails' => $emails->isEmpty() ? "No emails" : $emails,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function totalEmails()
    {
        $total = Email::count();

        $data = [
            'total_emails' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentEmails($student_id){
        $emails = DB::table('email')
            ->leftJoin('student', 'email.student_id', '=', 'student.id')
            ->select('email.*')
            ->where('student.id', '=', $student_id)
            ->get();

        $data = [
            'emails' => $emails->isEmpty() ? "No emails for this student" : $emails,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function studentEmailsTotal($student_id){
        $total = DB::table('email')
            ->leftJoin('student', 'email.student_id', '=', 'student.id')
            ->where('student.id', '=', $student_id)
            ->count();

        $data = [
            'total' => $total,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    
    public function show($id) { // get { id } 
        $email = DB::table('email')
            ->leftJoin('student', 'email.student_id', '=', 'student.id')
            ->select('email.*', 'student.first_name as student_first_name', 'student.last_name as student_last_name')
            ->where('email.id', '=', $id)
            ->first();

        $data = [
            'email' => !$email ? "This email doesn't exist " : $email,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function store(Request $request)
    { // post
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'email_type' => 'required',
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

        if (Email::where('email', $request->email)->exists()) {
            $data = [
                'message' => "This email already exits",
                'status' => 409
            ];

            return response()->json($data, 409);
        }

        $email_new = Email::create([
            'email' => $request->email,
            'email_type' => $request->email_type,
            'student_id' => $request->student_id
        ]);

        if (!$email_new) {
            $data = [
                'message' => 'Error',
                'status' => 500
            ];

            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Email asociado',
            'email' => $email_new,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    { // put 
        $email_old = Email::find($id);

        if (!$email_old) {
            $data = [
                'message' => "This email doesn't exist, you can't update them",
                'status' => 409
            ];

            return response()->json($data, 409);
        }

        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'email_type' => 'required',
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

        $exists = Email::where('email', $request->email)
        ->where('id', '<>', $id)
        ->exists();

        if ($exists) {
            $data = [
                'message' => "This email is already taken",
                'status' => 409
            ];
            return response()->json($data, 409);
        }

        $email_old->email = $request->email;
        $email_old->email_type = $request->email_type;
        $email_old->student_id = $request->student_id;

        $email_old->save();

        $data = [
            'message' => 'Email updated successfully',
            'email' => $email_old,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update_partial(Request $request, $id)
    { // patch
        $email_old = Email::find($id);

        if (!$email_old) {
            $data = [
                'message' => "This email doesn't exist, you can't update them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'email',
            'email_type'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Some data is missing',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }

        if ($request->has('email')) {

            if (Email::where('email', $request->email)->exists()) {
                $data = [
                    'message' => "This email already exits",
                    'status' => 409
                ];

                return response()->json($data, 409);
            }

            $email_old->email = $request->email;
        }

        if ($request->has('email_type')) {
            $email_old->email_type = $request->email_type;
        }

        $email_old->save();

        $data = [
            'message' => 'Email updated successfully',
            'email' => $email_old,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function delete($id)
    { // delete
        $email = Email::find($id);

        if (!$email) {
            $data = [
                'message' => "This email doesn't exist, you can't delete them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        $email->delete();

        $data = [
            'message' => "Email deleted successfully",
            'status' => 200
        ];

        return response()->json($data, 200);
    }
}
