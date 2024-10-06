"use client"

import { Button, Flex, Heading } from "@/once-ui/components"
import feedbacks from "../resources/feedbacks.json"
import { FeedbackCard } from "./FeedbackCard"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from "react"

const shuffle = (arr: any[]) => {
    let index = arr.length;
    while(index) {
        const random = Math.floor(Math.random() * index);
        index--;
        [arr[index], arr[random]] = [arr[random], arr[index]];
    }
}

export const CardCarousal = () => {
    const mappedFeedbacks = feedbacks.map((f) => (
        {
            name: f.user.displayName,
            email: f.user.email,
            rating: f.project.rating,
            avatar: f.user.photoUrl,
            projectName: f.project.name
        }
    ))
    shuffle(mappedFeedbacks);
    const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({playOnInit: true, stopOnMouseEnter: true, stopOnInteraction: false})])
    return (
        <>
            <Flex margin="0" padding="0">
                <Heading as="h1" variant="display-strong-s">Feedbacks</Heading> 
            </Flex>
            <Flex style={{width: "70vw", margin: "0"}}>
                <Flex style={{overflowX: 'hidden'}} ref={emblaRef}>
                    <Flex style={{touchAction: "pan-y pinch-zoom"}}>
                        {
                            mappedFeedbacks.map((f) => (
                            <FeedbackCard {...f} /> 
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
