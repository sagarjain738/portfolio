import React from 'react';

type HeaderProps = {
    name: string
};

// const header: React.FC<headerProps> = () => {

function Header({ name }: HeaderProps) {

    return <header className="z-[999] relative">Have a good coding</header>
}
export default Header;