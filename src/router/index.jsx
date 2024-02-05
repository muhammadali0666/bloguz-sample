import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { FAQ } from "../pages/FAQ";
import { Media } from "../pages/media";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Admin } from "../pages/admin";
import { AdminHome } from "../pages/adminHome";
import { AdminImg } from "../pages/adminImg";
import { AdminContact } from "../pages/adminContact";
import { Single } from "../pages/single";
import { NotFound } from "../pages/notFound";

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/media" element={<Media />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/single/:id" element={<Single/>}/>
      <Route path="/admin-page-scret-control" element={<Admin />}>
        <Route path="admin-home" element={<AdminHome />} />
        <Route path="admin-photo" element={<AdminImg />} />
        <Route path="admin-contact" element={<AdminContact />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
