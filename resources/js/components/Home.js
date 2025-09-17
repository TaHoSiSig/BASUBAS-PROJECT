// resources/js/components/Home.js
import React from 'react';

export default function Home() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow-sm">
                    <div className="card-body text-center">
                        <h1 className="card-title mb-4">Welcome to MY TESTING SITE</h1>
                        <p className="lead">
                            This is A TESTING SITE FOR MAAM JOY!. Use the navigation above to visit About or Contact pages.
                        </p>
                        <div className="mt-3">
                            <a href="/" className="btn btn-primary m-1">Home</a>
                            <a href="/about" className="btn btn-secondary m-1">About</a>
                            <a href="/contact" className="btn btn-success m-1">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
