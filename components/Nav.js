import Link from "next/link";
import NavStyles from './styles/NavStyles';
import { useUser } from "./User";
import SignOut from "./SignOut";

export default function Nav() {
  const user = useUser();
    return (
      <NavStyles>
        {user && (
          <>
            <Link href="/invoices">Invoices</Link>
            <Link href="/vendors">Vendors</Link>
            <Link href="/users">Users</Link>

            <SignOut />
          </>
        )}
        {!user && (
          <>
            <Link href="/about">About Us</Link>
            <Link href="/signin">Sign In</Link>
          </>
        )}
      </NavStyles>
    );
}
