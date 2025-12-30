import React from "react"; 

function MainLayout(props) {
  const { children } = props;
  
  return (
    <>
	    <div className="flex min-h-screen">
			<aside className="bg-defaultBlack w-28 text-special-bg2">kiri</aside>
			<div className="flex-1 flex flex-col">
			    <div className="bg-green-300">kanan atas</div>
			    <div className="bg-green-500 flex-1">{children}</div>
            </div>
        </div>
    </>
  );
}

export default MainLayout;