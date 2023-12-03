import useFetchData from "./hooks/useFetchData.js";
import {LoadingSpinnerUIComponent} from "./components/presentational/LoadingSpinnerUIComponent.jsx";
import {ModalErrorUIComponent} from "./components/presentational/ModalErrorUIComponent.jsx";
import {UsersCardsParentComponent} from "./components/parent/UsersCardsParentComponent.jsx";

function App() {
    const usersURL = 'https://jsonplaceholder.typicode.com/users';
    const [isLoading, usersData, usersError] = useFetchData(usersURL)
    const ShowUserCards = () => {
        if (isLoading)
            return <LoadingSpinnerUIComponent/>
        if (usersError)
            return <ModalErrorUIComponent
                modalTitle={usersError.message}
                modalText="Fail to fetch user data. It could be because of the internet connection. You can try checking you internet connection "/>
        if (usersData)
            return <UsersCardsParentComponent usersData={usersData}/>
    }
    return (
        <>
            <ShowUserCards/>
        </>
    )
}

export default App
