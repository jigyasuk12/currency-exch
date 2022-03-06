import React, { useEffect, useState } from 'react'
import Navbarinc from './Navbarinc'
import axios from "axios"
import { Form } from "react-bootstrap"

const Homepage = () => {
    const [texone, setTexone] = useState(10)
    const [textwo, setTextwo] = useState(10)
    const [valone, setValone] = useState(10)
    const [valtwo, setValtwo] = useState(10)
    const [curr1, setCurr1] = useState(10)
    const [curr2, setCurr2] = useState(10)

    useEffect(async () => {
        const data = await axios.get("http://data.fixer.io/api/latest?access_key=33420b79dbe59ed83974b776dbc16ccd")
        console.log(data.data);
        setCurr1(data.data.rates);
        setCurr2(data.data.rates)

    }, [])
    const convertNow = () => {

        const res = (valtwo / valone) * texone;
        setTextwo(res);

    }

    return (
        <div ><Navbarinc />
            <div style={{marginTop:"5rem"}}><Form style={{ width: "70%", margin: "auto", backgroundColor: "white", borderRadius: "6px", padding: "3rem" }} onChange={convertNow}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>value1</Form.Label>
                    <Form.Control as="textarea" rows={3} value={texone} onChange={e => setTexone(e.target.value)} />
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={e => setValone(e.target.value)}>
                    {Object.keys(curr1).map((val, index) => <option key={index} value={curr1[val]}>{val}</option>)}

                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>value2</Form.Label>
                    <Form.Control as="textarea" rows={3} value={textwo} onChange={e => setTextwo(e.target.value)} />
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={e => setValtwo(e.target.value)}>
                    {Object.keys(curr2).map((val, index) => <option key={index} value={curr2[val]}>{val}</option>)}
                </Form.Select>
            </Form></div>



        </div>
    )
}

export default Homepage