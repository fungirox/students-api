<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Student;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class StudentController extends Controller
{
    public function index() { // get
        $students = Student::all();
        
        $data = [
            'students' => $students->isEmpty() ? "No students" : $students,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function show($id) { // get { id } 
        $student = Student::find($id);

        $data = [
            'students' => !$student ? "This student doesn't exist " : $student,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function store(Request $request) { // post
        // La validez del tipo de dato está en el front, aquí solo se asegura que estén completos los datos 
        $validator = Validator::make($request->all(),[
            'last_name' => 'required',
            'middle_name' => 'required',
            'first_name' => 'required',
            'gender' => 'required'
        ]);

        if($validator -> fails()){
            $data = [
                'message' => 'You missed something',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }
        // --------------------------------------------------------------------------------

        $student = Student::create([
            'last_name' => $request->last_name,
            'middle_name' => $request->middle_name,
            'first_name' => $request->first_name,
            'gender' => $request->gender
        ]);

        if(!$student){
            $data = [
                'message' => 'Error',
                'status' => 500
            ];

            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Estudiante creado', 
            'student' => $student,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id) { // put
        $student = Student::find($id);

        if(!$student){
            $data = [
                'message' => "This student doesn't exist, you can't update them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        // La validez del tipo de dato está en el front, aquí solo se asegura que estén completos los datos 
        $validator = Validator::make($request->all(),[
            'last_name' => 'required',
            'middle_name' => 'required',
            'first_name' => 'required',
            'gender' => 'required'
        ]);

        if($validator -> fails()){
            $data = [
                'message' => 'You missed something',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }
        // --------------------------------------------------------------------------------

        $student->last_name = $request->last_name;
        $student->middle_name = $request->middle_name;
        $student->first_name = $request->first_name;
        $student->gender = $request->gender;

        $student->save();

        $data = [
            'message' => 'Estudiante actualizado', 
            'student' => $student,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update_partial(Request $request, $id){ // patch
        $student = Student::find($id);

        if(!$student){
            $data = [
                'message' => "This student doesn't exist, you can't update them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        // La validez del tipo de dato está en el front, aquí solo se asegura que estén completos los datos 
        $validator = Validator::make($request->all(),[
            'last_name',
            'middle_name',
            'first_name',
            'gender'
        ]);

        if($validator -> fails()){
            $data = [
                'message' => 'You missed something',
                'errors' => $validator->errors(),
                'status' => 400
            ];

            return response()->json($data, 400);
        }
        // --------------------------------------------------------------------------------

        if($request->has('last_name')){
            $student->last_name = $request->last_name;
        }
        if($request->has('middle_name')){
            $student->middle_name = $request->middle_name;
        }
        if($request->has('first_name')){
            $student->first_name = $request->first_name;
        }
        if($request->has('gender')){
            $student->gender = $request->gender;
        }

        $student->save();

        $data = [
            'message' => 'Dato actualizado', 
            'student' => $student,
            'status' => 200
        ];

        return response()->json($data,200);
    }

    public function delete($id) { // delete
        $student = Student::find($id);

        if(!$student){
            $data = [
                'message' => "This student doesn't exist, you can't delete them",
                'status' => 404
            ];

            return response()->json($data, 404);
        }

        $student->delete();

        $data = [
            'message' => "Estudiante eliminado",
            'status' => 200
        ];

        return response()->json($data, 202);        
    }
}
