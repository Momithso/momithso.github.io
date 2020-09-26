import React, {useState} from "react";
import Square from "./squares";
import {Container, Row, Col} from 'react-bootstrap'

export default function Board(props: any) {

    return (
        <Container className={"p-0"}>
            <Row>
                <Col className={"p-0"}>{Square(props, 0)}</Col>
                <Col className={"p-0"}>{Square(props, 1)}</Col>
                <Col className={"p-0"}>{Square(props, 2)}</Col>
            </Row>
            <Row>
                <Col className={"p-0"}>{Square(props, 3)}</Col>
                <Col className={"p-0"}>{Square(props, 4)}</Col>
                <Col className={"p-0"}>{Square(props, 5)}</Col>
            </Row>
            <Row>
                <Col className={"p-0"}>{Square(props, 6)}</Col>
                <Col className={"p-0"}>{Square(props, 7)}</Col>
                <Col className={"p-0"}>{Square(props, 8)}</Col>
            </Row>
        </Container>
    );
}
