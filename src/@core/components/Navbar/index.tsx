"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconButton } from "../Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from '@mui/material/Popover';


import { ShoppingCartSimple, Heart, User } from "@phosphor-icons/react";

import Logo from "../../../../public/LogoLeMonde.png";

export default function Navbar() {
  const [modalUser, setModalUser] = useState<null | HTMLElement>(null);
  const [modalFavorites, setModalFavorites] = useState<null | HTMLElement>(null);
  const [modalShop, setModalShop] = useState<null | HTMLElement>(null);

  return (
    <div className="flex flex-row justify-between items-center px-20 h-[70px] w-full fixed bg-white mt-4 z-50">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo Le monde" />
      </Link>
      <div className="flex flex-row space-x-2">
        <IconButton handleClick={(event: React.MouseEvent<HTMLButtonElement>) => setModalUser(event.currentTarget)}>
          <User size={20} />
        </IconButton>
        <IconButton handleClick={(event: React.MouseEvent<HTMLButtonElement>) => setModalFavorites(event.currentTarget)}>
          <Heart size={20} />
        </IconButton>
        <IconButton handleClick={(event: React.MouseEvent<HTMLButtonElement>) => setModalShop(event.currentTarget)}>
          <ShoppingCartSimple size={20} />
        </IconButton>
      </div>

      <Popover
        id="user-menu"
        anchorEl={modalUser}
        open={Boolean(modalUser)}
        onClose={() => setModalUser(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <p>Profile</p>
        <p>Logout</p>
      </Popover>
      <Popover
        id="Fav-menu"
        anchorEl={modalFavorites}
        open={Boolean(modalFavorites)}
        onClose={() => setModalFavorites(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <p>Item 1</p>
        <p>Item 2</p>
      </Popover>
      <Popover
        id="Shop-menu"
        anchorEl={modalShop}
        open={Boolean(modalShop)}
        onClose={() => setModalShop(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <p>Compra 1</p>
        <p>Compra 2</p>
      </Popover>
    </div>
  );
}
