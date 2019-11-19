import React from 'react';
import classNames from 'classnames'


import './WhiteBlock.scss'

const WhiteBlock = ({children, className}) => <div className={classNames('WhiteBlock', className)}>{children}</div>;


export default WhiteBlock;