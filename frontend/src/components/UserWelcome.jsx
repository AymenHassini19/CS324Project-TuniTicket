import React from 'react';

const UserWelcome = ({currentUser}) => {
    return (
        <div className="text-center my-5">
            {!currentUser ? (
                <h1 className="text-lg text-gray-800 my-2">No one is logged in</h1>
            ) : (
                <div>
                    <h1 className="text-lg text-gray-800 my-2">
                        Welcome, <span className="font-bold">{currentUser.username}</span>
                    </h1>
                    {currentUser.isAdmin ? (
                        <p className="text-lg text-gray-800 my-2">You are logged in as an Admin.</p>
                    ) : (
                        <p className="text-lg text-gray-800 my-2">You are logged in as a Normal User.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserWelcome;