import { FileQuestionMark, Handshake, House, MessageSquare, User } from "lucide-react";

const NavBar = () => {
  return (
    <div className="
        fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded shadow-lg h-14 w-[95%] md:w-md
        py-4 px-4 md:px-16 flex items-center justify-between space-x-4">
            <House className="cursor-pointer"/>
            <Handshake className="cursor-pointer"/>
            <MessageSquare className="cursor-pointer"/>
            <FileQuestionMark className="cursor-pointer"/>
            <User className="cursor-pointer"/>
    </div>
  );
}

export default NavBar;