import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import {act} from "react";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];
export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);


    function ShowTeam(): React.JSX.Element {
        return (
            <div>
            <strong>Team:</strong>
                                {team.map((member: string) => (
                                    <li key={member}>{member}</li>
                                ))}
    
        </div>
        );
    }
    function chooseMember(newMember: string) {
        act(() => {              
            if (!team.includes(newMember)) {
                setTeam([...team, newMember]);
                setAllOptions(PEOPLE);      
            }
        });
        
    }

    function clearTeam() {
        act(() => {              
            setTeam([]);
        });
        
    }


    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={() => {chooseMember(option)}} size="sm">
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <ShowTeam></ShowTeam>
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
