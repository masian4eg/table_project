import React from "react";
// import Dropdown from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';

function DropdownList(props) {
    const filterColumn = props.filterColumn;
    const action = props.action;
    const setFilterColumn = props.setFilterColumn;
    const setAction = props.setAction;
    return (
        <div className="dropdown">
            <p style={{fontSize: "24px", fontWeight: "bold", color: "#a4a4a4"}}>
                Filter by <u>{filterColumn}{" "}
                {action !== "" && filterColumn === "Name" ? null : action}
            </u>
            </p>
            <div className='dropdown-main'>

<Dropdown>
    <Dropdown.Toggle className='dropdown-toggle' id="dropdown-autoclose-true">
        <a href="#" onClick={() => setFilterColumn("Name")}>
            Name
        </a>
    </Dropdown.Toggle>
</Dropdown>
<Dropdown>
    <Dropdown.Toggle className='dropdown-toggle' id="dropdown-autoclose-true">
        <a href="#" onClick={() => setFilterColumn("Amount")}>
            Amount
        </a>
    </Dropdown.Toggle>
    <Dropdown.Menu  className='dropdown-menu'>
        <Dropdown.Item>
            <a
                href="#"
                onClick={() => {
                    setFilterColumn("Amount");
                    setAction("=");
                }}
            >
                =
            </a>
        </Dropdown.Item>
        <Dropdown.Item>
            <a
                href="#"
                onClick={() => {
                    setFilterColumn("Amount");
                    setAction("<");
                }}
            >
                &#60;
            </a>
        </Dropdown.Item>
        <Dropdown.Item>
            <a
                href="#"
                onClick={() => {
                    setFilterColumn("Amount");
                    setAction(">");
                }}
            >
                &#62;
            </a>
        </Dropdown.Item>
    </Dropdown.Menu>

</Dropdown>
            <Dropdown>
                <Dropdown.Toggle className='dropdown-toggle'  id="dropdown-autoclose-true">
                    <a href="#" onClick={() => setFilterColumn("Distance")}>
                        Distance
                    </a>
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu'>
                    <Dropdown.Item>
                        <a
                            href="#"
                            onClick={() => {
                                setFilterColumn("Distance");
                                setAction("=");
                            }}
                        >
                            =
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a
                            href="#"
                            onClick={() => {
                                setFilterColumn("Distance");
                                setAction("<");
                            }}
                        >
                            &#60;
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <a
                            href="#"
                            onClick={() => {
                                setFilterColumn("Distance");
                                setAction(">");
                            }}
                        >
                            &#62;
                        </a>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </div>
        </div>
    );
}

export default DropdownList;