import React, { useState, useEffect, useRef } from 'react'

function HomeNave() {
  const [thecurcal, setThecurcal] = useState(false);
  const dropdownRef = useRef(null);
  const [currentLogo, setCurrentLogo] = useState("$");

  const [budget, setBudget] = useState("BUDGET"); 
  const [isEditing, setIsEditing] = useState(false);
  const [isTrendingNear, setIsTrendingNear] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThecurcal(false);
      }
    }

    if (thecurcal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [thecurcal]);

  const handleCurrencySelect = (symbol) => {
    setCurrentLogo(symbol);
    setThecurcal(false);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (budget.trim() === "") setBudget("BUDGET"); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (budget.trim() === "") setBudget("BUDGET");
    }
  };


  useEffect(() => {
  const handleScroll = () => {
    const trending = document.querySelector(".TrandingBox");

    if (!trending) return;

    const top = trending.getBoundingClientRect().top;

    if (top <= 200) {
      setIsTrendingNear(true);
    } else {
      setIsTrendingNear(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      {/* FIXED: added layout priority classes here */}
      <div ref={dropdownRef} className={`"    ${
      isTrendingNear
        ? "z-0"
        : "z-[999]"
    } relative md:w-full z-20  sticky top-0 bg-gradient-to-b from-[#f4f4f4] from-8% to-[#bcbcbc] via-35%"`}>
    
        <nav className="bg-transparent text-black p-1 h-20 flex items-center justify-center">
          <div className="w-full md:max-w-6xl mx-auto flex justify-center">
            <div className="flex items-center justify-center gap-2 md:gap-12 select-none">
              <div className="text-center tracking-wide text-[15px] md:text-[20px] hover:text-neutral-500 cursor-pointer font- text-neutral-900">
                ORDER
              </div>
              
              {/* Center Box */}
              <div className="relative flex items-center justify-start bg-[#111111] h-12 w-40 rounded-full pl-14 pr-4 shadow-sm">
                
                {/* Fixed Circle */}
                <div 
                  onClick={() => setThecurcal(!thecurcal)} 
                  className="absolute left-0.5 top-0.5 cursor-pointer border border-[#111111] bg-[#FFFFFF] h-11 w-11 rounded-full flex items-center justify-center z-10"
                >
                  <div className="currencyLogo flex items-center justify-center font-semibold rounded-full text-center text-[21px] text-black">
                    {currentLogo}
                  </div>
                </div>

                {/* Budget Content Box */}
                <div className="w-full flex items-center justify-center">
                  {isEditing ? (
                    <input
                      type="text"
                      value={budget === "BUDGET" ? "" : budget} 
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "" || /^\d*\.?\d*$/.test(val)) {
                          setBudget(val);
                        }
                      }}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      className="bg-transparent text-[#ffffff] font-semibold text-[15px] uppercase tracking-wider outline-none border-b border-neutral-500 w-full text-center pb-0"
                      placeholder="0.00"
                    />
                  ) : (
                    <div 
                      onClick={() => setIsEditing(true)} 
                      className="BUDGET text-[#ffffff] font- text-[20px] tracking-widest mb-0.5 cursor-pointer select-none hover:text-neutral-300 transition-colors truncate text-center w-full"
                    >
                      {budget}
                    </div>
                  )}
                </div>

              </div>
              
              <div className="text-center tracking-wide text-[15px] md:text-[20px] hover:text-neutral-500 cursor-pointer font- text-neutral-900">
                PRODUCTS
              </div>
            </div>
          </div>
        </nav>

        {thecurcal && (
          <div className="currency overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-thumb]:rounded-full absolute left-1/2 -translate-x-1/2 mt-1 h-56 w-44 z-50 border border-neutral-200 rounded-2xl bg-white shadow-xl py-2">
            <div onClick={() => handleCurrencySelect("$")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Dollar: $</div>
            <div onClick={() => handleCurrencySelect("€")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Euro: €</div>
            <div onClick={() => handleCurrencySelect("£")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Pound: £</div>
            <div onClick={() => handleCurrencySelect("¥")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Yen / Yuan: ¥</div>
            <div onClick={() => handleCurrencySelect("₹")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Rupee: ₹</div>
            <div onClick={() => handleCurrencySelect("₩")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Won: ₩</div>
            <div onClick={() => handleCurrencySelect("₽")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Rubel: ₽</div>
            <div onClick={() => handleCurrencySelect("₺")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Lira: ₺</div>
            <div onClick={() => handleCurrencySelect("₪")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Shekel: ₪</div>
            <div onClick={() => handleCurrencySelect("₫")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Dong: ₫</div>
            <div onClick={() => handleCurrencySelect("฿")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Baht: ฿</div>
            <div onClick={() => handleCurrencySelect("﷼")} className='px-4 justify-start flex items-center h-10 font-medium hover:bg-neutral-100 cursor-pointer text-neutral-800 text-[14px]'>Riyal / Peso: ﷼ / ₱</div>
          </div>
        )}

      </div>
    </>
  )
}

export default HomeNave
