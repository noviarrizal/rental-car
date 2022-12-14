import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction='vertical' margin="4em" />
            <BookCard />
            <Marginer direction='vertical' margin="4em" />
            <BookingSteps />
            <Marginer direction='vertical' margin="4em" />
            <AboutUs />
            <Marginer direction='vertical' margin="4em" />
            <TopCars />
        </PageContainer>
    );
}

