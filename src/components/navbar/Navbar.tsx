import DesktopNav from './DesktopNav';
import { MobileNav } from './MobileNav';

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between border-b">
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
}
