'use client'

import TwitterModal from "@/app/components/TwitterModal";
import FormModal from "@/app/components/FormModal";
import React, {useState} from "react";
import ButtonDefault from "@/app/components/Button";


export default function Modals() {
    const [twitterModal, setTwitterModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    return (
        <div>
            <ButtonDefault
                className=" px-8 py-2 shadow-lg text-base-100 lg:text-xl bg-gradient-to-r from-polkadot-rose via-pink-500 to-polkadot-rose
                transition-transform duration-300 transform hover:scale-105
                border-2 border-transparent hover:border-white "
                text="Garanta seu passaporte"
                onClick={() => setTwitterModal(true)}
            />

            <TwitterModal isOpen={twitterModal} setOpen={setTwitterModal} nextStep={() => setFormModal(true)} />
            <FormModal isOpen={formModal} setIsOpen={setFormModal}/>


        </div>
    )
}