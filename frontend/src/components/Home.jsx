import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    useEffect(() => {
        document.title = "Home Page";
    }, [])

    return (
        <body>
            <div class="container home-container mb-3">
                <div class="jumbotron">
                    <h1 class="display-4">CRUD PHP</h1>
                    <p class="lead">A CRUD Webapp using PHP and MYSQL</p>
                    <hr />
                    <p class="lead">Hello  ^_^, Welcome to PHP CRUD Web App! </p>
                    <p class="lead">This is a web application that allows you to Create, Read, Update, and Delete data.</p>
                    <p class="lead">You can use this app to manage your data efficiently and easily.</p>
                    <p class="lead">This CRUD Web App is implemented with php programming language</p>
                    <p class="lead">If you have feedback, you can contact me through the contact below</p>
                </div>
            </div>
            <hr/>
            <div class="container mb-5">
                <div class="card">
                    <div class="card card-body">
                        <h3>Sections </h3>
                    </div>
                    <div class="card-body">
                        <h3>List Student Section</h3>    
                        <p>
                            This section will show every student admins have added to database.
                        </p>
                    </div>
                    <div class="card-body"> 
                        <h3>Add Student Section</h3>    
                        <p>
                            This section's function is to add student to database.
                        </p>
                    </div>
                </div>
            </div>
        </body>
    )
}
