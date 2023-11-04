import {LayoutProps} from "./layout.props";
// import Footer from "../components/footer";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen flex-col'}>
            <main
                className={'w-full h-auto 2xl:px-10 md:px-5 px-3'}>{children}</main>
            {/*<Footer/>*/}
        </div>
    );
}

export default Layout;