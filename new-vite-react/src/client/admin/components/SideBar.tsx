import { Icon } from '@iconify-icon/react';
import styled from 'styled-components';

import Stack from 'react-bootstrap/Stack';

const Side = styled(Stack)`
    background-color: #212529;
    position: fixed;
    width: 60px;
    height: 100vh;
    align-items: center;
    padding: 20px 0px;
`

const Item = styled(Icon)`
    cursor: pointer;
    transition: 0.2s all;
    &:hover { color: #fff; }
`

const Link = styled.a`
    color: ${(props) => 
        // @ts-ignore
        window.location.href.includes(props.href) ? '#fff': '#9e9e9e' 
    };
}
`

export default function SideBar() {
    return (
        <Side gap={ 3 }> 
            <Link href="/admin/home"><Item height="35px" icon="material-symbols:home" /></Link>
            <Link href="/admin/products"><Item height="35px" icon="ant-design:product-filled" /></Link>
            <Link href="/admin/users"><Item height="35px" icon="mdi:users" /></Link>

            <Link href="/admin/settings" className="mt-auto"><Item height="35px" icon="material-symbols:settings" /></Link>
            <Link href="/admin/logout"><Item height="35px" icon="material-symbols:logout" /></Link>
        </Side>
    )
}