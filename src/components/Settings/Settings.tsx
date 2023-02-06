import {
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    Typography,
    useTheme
} from "@mui/material";
import colorTypes from "../../types/colorTypes";
import {useAppDispatch} from "../../redux/hooks";
import {setPrimaryColor, toggleColorMode} from "../../redux/slices/themeSlice";
import {colorsArray} from "../../utils/colors";
import useSx from "../../hooks/useSx";
import settingsStyles from "./settingsStyles";
import i18n from "../../utils/language/i18n";
import React from "react";
import {useTranslation} from "react-i18next";


export default function Settings() {
    const theme = useTheme();
    const dispatch = useAppDispatch()

    const changePrimaryColor = (color: colorTypes) => {
        dispatch(setPrimaryColor(color))
    }

    const changeColorMode = () => {
        dispatch(toggleColorMode())
    }
    const {t} = useTranslation();

    const nextThemeMode = theme.palette.mode === 'dark' ? t('Settings.chooseLightTheme') : t('Settings.chooseDarkTheme')

    const styles = useSx(settingsStyles)

    return (
        <Container
            sx={styles.container}
        >
            <Typography variant='h1' sx={styles.title}>{t('Settings.title')}</Typography>
            <Box sx={styles.wrapper}>
                <Typography variant='h2'>{t('Settings.chooseLanguageTitle')}</Typography>
                <Box sx={{display: 'flex', mt: 2, mb: 4}}>
                    <Button
                        variant='outlined'
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        {t('Settings.chooseEnglish')}
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{ml: 2}}
                        onClick={() => i18n.changeLanguage('ua')}
                    >
                        {t('Settings.chooseUkrainian')}
                    </Button>
                </Box>
                <Typography textAlign='center' variant='h2'>{t('Settings.chooseColorTitle')}</Typography>
                <Button
                    variant='outlined'
                    sx={styles.colorModeButton}
                    onClick={changeColorMode}
                    color="inherit"
                >
                    {nextThemeMode}
                </Button>
                <List
                    sx={styles.colorsList}
                >
                    {colorsArray.map((color, index) => {
                        return (
                            <ListItem
                                key={index}
                                sx={styles.colorItem}
                            >
                                <Button
                                    variant='contained'
                                    sx={styles.colorButton(color.ref)}
                                    onClick={() => changePrimaryColor(color.enum)}
                                >
                                    {color.title[i18n.resolvedLanguage as 'en' | 'ua']}
                                </Button>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Container>
    )
}