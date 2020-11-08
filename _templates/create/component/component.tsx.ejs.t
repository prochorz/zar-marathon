---
to: "<%
 const baseComponentUrl = 'src/components/';
 const componentTypeUrl = componentType + 's/';
 const prefix = componentType === 'unique-organism' ? 'o-' : componentType[0] + '-';
 const componentFolderName =  prefix + h.changeCase.kebab(componentName);
 return baseComponentUrl + componentTypeUrl + componentFolderName + '/' + componentFolderName + '.tsx'%>"
---
<%
    const prefix = componentType === 'unique-organism' ? 'o-' : componentType[0] + '-';
    const name = {
        kebab: h.changeCase.kebab(prefix + componentName),
        pascal: h.changeCase.pascal(prefix + componentName)
    }
%>import React from 'react';
import cx from 'classnames';

import s from './<%= name.kebab %>.module.scss';

export interface Props {
    render?: () => JSX.Element[] | JSX.Element,
    className?: string,
    onClick?: (event: React.MouseEvent) => void,
}

const <%= name.pascal %>: React.FC<Props> = (props) => {
    const { children, className } = props;

    const ctxClass = cx(s['<%= name.kebab %>'], className);

    return (
        <div className={ ctxClass }>
            { children }
        </div>
    );
}

export default <%= name.pascal %>;