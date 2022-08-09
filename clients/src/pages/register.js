import {useContext, useState} from "react";
import { authContext } from "../context/authContext";
import { useForm } from "../utility/hooks";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    )`
