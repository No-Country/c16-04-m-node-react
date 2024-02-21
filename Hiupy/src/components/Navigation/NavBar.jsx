"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function NavBar() {
    return (
        <Navbar className="bg-af7d4d w-full sticky" fluid >
            <Navbar.Brand>
                <img
                    src="/assets/logo.png"
                    className="mr-3 h-10 bg-af7d4d"
                    alt="Hiupy Logo"
                />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hiupy</span> */}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="/assets/images/Avatar.png"
                            className="mr-3"
                            rounded
                        />
                    }
                >
                    {/*----------- Dropdown del USER ------------*/}
                    <Dropdown.Header>
                        <span className="block text-sm">Anthony Kiedis</span>
                        <span className="block truncate text-sm font-medium">
                            akiedis@redhot.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/home" active>
                    Inicio
                </Navbar.Link>
                <Navbar.Link href="#">Inventario</Navbar.Link>
                <Navbar.Link href="/recetas">Recetas</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
