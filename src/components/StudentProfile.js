import React, { useState, useEffect } from "react";

const StudentProfile = () => {
    const [userData, setUserData] = useState(null)
    const [selectedTest, setSelectedTest] = useState("default");
    useEffect(() => {
         getData()
    }, []);

    async function getData(){ 
        const data = await fetch('http://localhost:3001')    
        const parseData = await data.json()
        setUserData(parseData)    
        }
    return userData? (
        <div>
            <header>
                <p>User Name: {userData.name}</p>
                <p> User Id: {userData.id}</p>
                <button>Logout</button>
            </header>
            <section className="tests">
                <h2>Tests</h2>
                <select
                    id=""
                    name=""
                    value={selectedTest}
                    onChange={(e) => setSelectedTest(e.target.value)}
                >
                    <option value="default">Default</option>
                    {userData.tests &&
                        userData.tests.map((test, index) => (
                            <option key={test + index} value={test}>
                                {test}
                            </option>
                        ))}
                </select>
                <section>
                    {selectedTest !== "default" && (
                        <div>
                            <h3>{selectedTest.toUpperCase()}</h3>
                            <p>Base Words</p>
                            <ul className="baseWords">
                                {userData[selectedTest].baseWords.map((e) => (
                                    <li>{e}</li>
                                ))}
                            </ul>
                            <p>Challenge Words</p>
                            <ul className="challengeWords">
                                {userData[selectedTest].challengeWords.map((e) => (
                                    <li>{e}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </section>
            <section className="grades"></section>
            <div className="subBtn">
                <button>Submit</button>
            </div>
        </div>
    ) : (
        <div>
            nope
        </div>
    );
};

export default StudentProfile;
