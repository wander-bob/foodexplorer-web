import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Details } from "../pages/Details";
import { Edit } from "../pages/Edit";
import { New } from "../pages/New";
export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/new" element={<New />} />
      <Route path="/dish/:id/details" element={<Details />} />
      <Route path="/dish/:id/edit" element={<Edit />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}