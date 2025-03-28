import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../manager/actions/preloaderAction";

const useDataLoader = (actions) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // Preloader'ı göster
                dispatch(showLoading());

                // Eğer actions array değilse hata ver
                if (Array.isArray(actions) && actions.length > 0) {
                    // Bütün actions'u paralel dispatch et
                    await Promise.all(actions.map(action => dispatch(action())));
                } else {
                    throw new Error("actions boş ya da array değil");
                }
            } catch (error) {
                console.error("Error occurred during fetching data:", error);
            } finally {
                // Loading'i gizle
                dispatch(hideLoading());
            }
        };

        fetchAllData();
    }, [dispatch, actions]); // actions değiştiğinde yeniden çalışacak
};

export default useDataLoader;
