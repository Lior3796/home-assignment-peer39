import '../../styles/style.css';
import { AppRouter } from '../appRouter/AppRouter';

// @desc Container app - container of app 
export const Container = () => {

    return (
        <main className="light">
            <AppRouter />
        </main >
    )
}
