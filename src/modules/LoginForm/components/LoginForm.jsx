import React, {Component} from "react";
import {Form, Icon, Input} from "antd";
import {Link} from "react-router-dom"


import {Button, WhiteBlock} from "../../../components";

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="Auth__top">
                    <h1>Войти в аккаунт</h1>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <WhiteBlock>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className="Auth__register-link" to="/register">
                            Зарегистрироваться
                        </Link>
                    </Form>
                </WhiteBlock>
            </div>
        )
    }
}

