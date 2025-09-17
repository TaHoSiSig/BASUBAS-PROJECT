<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index() {
        return Contact::all();
    }

    public function store(Request $request) {
        $contact = Contact::create($request->all());
        return $contact;
    }

    public function update(Request $request, $id) {
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
        return $contact;
    }

    public function destroy($id) {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
