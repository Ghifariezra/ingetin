import { ScrollToTopButton } from "../sot/scrollOnTop";
import { Switcher } from "../toggle/switcher";

export function QuickAccess() {
    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="group flex items-center justify-center rounded-full 
                bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-200/50
                transition-all duration-300 ease-out
                
                dark:bg-slate-950/80 dark:border-slate-800 dark:shadow-slate-950/50 dark:hover:bg-slate-950
                dark:hover:border-slate-700
            ">
                    <Switcher />
                </div>
            </div>
            <ScrollToTopButton />
        </>
    );
}