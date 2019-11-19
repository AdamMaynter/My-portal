import React, {Component} from "react";
import {Form, Icon, Input} from "antd";
import {Link} from "react-router-dom"


import {Button, WhiteBlock} from "../../../components";

export default class RegisterForm extends Component {
    render() {
        const success = false;
        return (
            <div>
                <div className="Auth__top">
                    <h1>Регистрация</h1>
                    <p>Для входа, вам нужно зарегестрироваться</p>
                </div>
                <WhiteBlock>
                    {!success ? (
                        <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                placeholder="E-Mail"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                type="password"
                                placeholder="Ваше имя"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                type="password"
                                placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                size="large"
                                type="password"
                                placeholder="Повторите Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Зарегестрироваться
                            </Button>
                        </Form.Item>
                        <Link className="Auth__register-link" to="/login">
                            Войти в аккаунт
                        </Link>
                    </Form>
                        ) : (
                        <div className="Auth__success-block">
                            <div>
                                <Icon width="50px" height="50px" type="info-circle" theme="twoTone" />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На вашу почту отправленно письмо с ссылкой на потверждение аккаунта.</p>
                        </div>
                    )}
                </WhiteBlock>
            </div>
        )
    }
}

