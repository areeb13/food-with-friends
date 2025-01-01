import React from "react";

export default function Home() {
    return (
        <>
            <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1>Welcome To</h1>
                <h1>FoodWithFriends</h1>
                <form>
                    <div className="text-center">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1"/>
                        </div>
                        <div class="mb-3">
                            <label for="room-name" class="form-label">Room Code</label>
                            <input type="text" class="form-control" id="room-name" />
                        </div>
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
