import axios from "axios";
import { baseURL } from "./constant";

export const API = axios.create({ baseURL: baseURL });
