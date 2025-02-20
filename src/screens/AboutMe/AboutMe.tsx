import { format } from "date-fns";
import * as Icons from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated } from "react-native";
import { useTheme } from "styled-components/native";

import { PageTitle, ScreenContent } from "../../components";
import * as S from "./AboutMeStyles";
import { IAboutMe } from "./utils/types";

const formatDate = (date: string, currently?: string) => {
    if (!date) return currently;
    const newDate = new Date(date);
    return format(newDate, "MM/yyyy");
};

const ExpandableSection = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon: JSX.Element;
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const [measured, setMeasured] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded(!expanded);
    };

    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight],
    });

    return (
        <S.SectionContainer>
            <S.HeaderSectionContainer onPress={toggleExpand}>
                {icon}
                <S.SectionTitle>{title}</S.SectionTitle>
                <Animated.View style={{ marginLeft: "auto" }}>
                    {expanded ? (
                        <Icons.CaretUp size={20} weight="bold" color="gray" />
                    ) : (
                        <Icons.CaretDown size={20} weight="bold" color="gray" />
                    )}
                </Animated.View>
            </S.HeaderSectionContainer>

            {/* Mede a altura antes de esconder */}
            <S.Body
                style={{ opacity: 0, position: "absolute" }}
                onLayout={(event) => {
                    if (!measured) {
                        setContentHeight(event.nativeEvent.layout.height);
                        setMeasured(true);
                    }
                }}
            >
                {children}
            </S.Body>

            {/* Animação com altura dinâmica */}
            {measured && (
                <Animated.View style={{ height, overflow: "hidden" }}>
                    <S.Body>{children}</S.Body>
                </Animated.View>
            )}
        </S.SectionContainer>
    );
};

export function AboutMe() {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const aboutMeData: IAboutMe = t("aboutMe", { returnObjects: true }) as IAboutMe;

    return (
        <ScreenContent scrollView>
            <S.Container>
                <PageTitle text={aboutMeData.title} />
                <S.Description>{aboutMeData.description}</S.Description>
                {/* 
                waiting for the download button to be implemented
                <S.DownloadButton onPress={() => handleDownloadCV()}>
                    <S.DownloadButtonText isLightTheme={theme === ThemeType.light}>
                        {" "}
                        {aboutMeData.curriculum}
                    </S.DownloadButtonText>
                </S.DownloadButton> */}

                <ExpandableSection
                    title={aboutMeData.employmentHistory.title}
                    icon={<Icons.Briefcase size={24} weight="fill" color={colors.textPrimary} />}
                >
                    {aboutMeData.employmentHistory.jobs.map((job, index) => (
                        <S.ItemsContainer key={index}>
                            <S.SectionDescriptionHeader>
                                <S.SectionDescriptionTitle>•</S.SectionDescriptionTitle>
                                <S.SectionDescriptionTitle>
                                    {" "}
                                    {job.position}
                                </S.SectionDescriptionTitle>
                            </S.SectionDescriptionHeader>
                            <S.DescriptionContainer>
                                <Icons.Building
                                    size={20}
                                    weight="fill"
                                    color={colors.textPrimary}
                                />
                                <S.SectionDescription>
                                    {job.company} - {job.location}
                                </S.SectionDescription>
                            </S.DescriptionContainer>
                            <S.DescriptionContainer>
                                <Icons.CalendarBlank
                                    size={20}
                                    weight="fill"
                                    color={colors.textPrimary}
                                />
                                <S.SectionDescription>
                                    {formatDate(job.initDate)} -{" "}
                                    {formatDate(job.endDate, aboutMeData.currently)}
                                </S.SectionDescription>
                            </S.DescriptionContainer>
                        </S.ItemsContainer>
                    ))}
                </ExpandableSection>

                <ExpandableSection
                    title={aboutMeData.education.title}
                    icon={<Icons.Book size={24} weight="fill" color={colors.textPrimary} />}
                >
                    {aboutMeData.education.courses.map((course, index) => (
                        <S.ItemsContainer key={index}>
                            <S.SectionDescriptionHeader>
                                <S.SectionDescriptionTitle>•</S.SectionDescriptionTitle>
                                <S.SectionDescriptionTitle>
                                    {" "}
                                    {course.name}
                                </S.SectionDescriptionTitle>
                            </S.SectionDescriptionHeader>
                            <S.DescriptionContainer>
                                <Icons.Building
                                    size={20}
                                    weight="fill"
                                    color={colors.textPrimary}
                                />
                                <S.SectionDescription>
                                    {course.institution} - {course.level}
                                </S.SectionDescription>
                            </S.DescriptionContainer>
                            <S.DescriptionContainer>
                                <Icons.CalendarBlank
                                    size={20}
                                    weight="fill"
                                    color={colors.textPrimary}
                                />
                                <S.SectionDescription>
                                    {formatDate(course.initDate)} - {formatDate(course.endDate)}
                                </S.SectionDescription>
                            </S.DescriptionContainer>
                        </S.ItemsContainer>
                    ))}
                </ExpandableSection>

                <ExpandableSection
                    title="Idiomas"
                    icon={<Icons.Globe size={24} weight="fill" color={colors.textPrimary} />}
                >
                    {aboutMeData.languages.languages.map((language, index) => (
                        <S.DescriptionContainer key={index}>
                            <S.SectionDescriptionHeader>
                                <S.SectionDescription>•</S.SectionDescription>
                                <S.SectionDescription>
                                    {" "}
                                    {language.name} - {language.level}
                                </S.SectionDescription>
                            </S.SectionDescriptionHeader>
                        </S.DescriptionContainer>
                    ))}
                </ExpandableSection>
            </S.Container>
        </ScreenContent>
    );
}
