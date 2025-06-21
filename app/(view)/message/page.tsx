import { Search } from "lucide-react";
import NavBar from "../module/NavBar";

const MessagePage = () => { 
  return (
    <div className="min-h-screen bg-white">
      {/* 検索ボックスのセクション */}
      <header className="fixed top-0 left-0 right-0  px-2 lg:px-16 py-4 z-10">
        <div className="container mx-auto flex justify-center align-center">
          <Search className='my-auto text-gray-700 ' size={32}/>
          <div className="w-4"/>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:gray-100/30"
          />
        </div>
      </header>
              
        {/* メッセージのセクション */}
        <div className="container w-full flex flex-col items-center justify-center mt-16">
            <div className="w-full md:w-3xl h-screen lg:border-x-1 border-gray-300 bg-white p-4 ">
                {/* タブ選択セクション */}
                <div className="w-full flex space-x-4 mb-4 font-bold text-gray-700">
                    <div className="grow flex justify-center align-center border-r-1 cursor-pointer border-gray-400 ">おすすめ</div>
                    <div className="grow flex justify-center align-center cursor-pointer">フォロー中</div>
                </div>

                {/* アイコン付きメッセージカード */}
                <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full"/>
                    <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-gray-600">Hello! How are you?</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full"/>
                    <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-gray-600">Hello! How are you?</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full"/>
                    <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-gray-600">Hello! How are you?</p>
                    </div>
                </div>
            </div>
        </div>

        <NavBar />
    </div>
  );
}

export default MessagePage;