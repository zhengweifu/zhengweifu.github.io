import React, { Component } from 'react';

import WorkPage from './WorkPage';

import CodeBox from '../CodeBox';
console.log(CodeBox);

import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/styles';

const codeString = [
    "def test():",
    "   for x in [1, 2 ,3]:",
    "       print x"
].join('\n');

export default () => {
    
    return <WorkPage siderSelectedKey='1' breadcrunbs={['工作', '三维制作']}>
        <CodeBox codeComponent={<SyntaxHighlighter language='python' style={xcode}>{codeString}</SyntaxHighlighter>}>
            Image
        </CodeBox>
    </WorkPage>
};