import * as React from 'react';
import Search from "../Icons/Search";
import styles from './Form.module.css'
import Input from '@mui/material/Input';
import PhoneInput from 'react-phone-input-2'
import countryList from 'react-select-country-list'
import {useForm} from 'react-hook-form';
import {useEffect, useState} from "react";
import {Select, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import emailjs from '@emailjs/browser';
import SendButton from "../SendButton/SendButton";

export default function Form() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();
    const countries = countryList().getLabels()
    const [country, setCountry] = useState('United States')
    const [phone, setPhone] = useState(null)
    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EPK), [])
    const onSubmit = (emailData) => emailjs.send("service_393hams", "template_nek96wm", emailData);
    return <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <Input {...register('name', {required: true})} fullWidth placeholder={"Metaverse name"}
                   className={styles.input}/>
            <Input {...register('webAddress', {required: true})} fullWidth placeholder={"Web address"}
                   className={styles.input}/>
            <Input {...register('email', {required: true})} fullWidth placeholder={"Email"}
                   className={styles.input}/>
            <PhoneInput
                {...register('phone', {required: true})}
                country={'us'}
                value={phone}
                onChange={(phone) => {
                    setPhone(phone)
                    setValue("phone", phone)
                }}
                placeholder={"Phone number"}
            />
            <Select
                defaultValue={'Country'}
                value={country}
                label="Country"
                onChange={(event) => {
                    setCountry(event.target.value)
                    setValue("country", event.target.value)
                }
                }
                className={styles.input}
            > {countries.map(country => <MenuItem value={country}>{country}</MenuItem>)}
            </Select>
            <TextField placeholder={"Message"} onChange={(event) => {
                setValue("message", event.target.value)
            }}
                       className={styles.input}
            />
            <SendButton/>
        </form>
    </div>
}