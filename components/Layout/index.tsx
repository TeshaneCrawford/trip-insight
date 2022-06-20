import React from 'react';

import Head from './Head';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Head title={'Trip Insight'} />
            <header>
                <nav>
                    <Navbar />
                </nav>
            <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </header>
        </React.Fragment>
    );
};

export default Layout;