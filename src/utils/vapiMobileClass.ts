export const getVapiControlsClass = (size: string) => {
    const buttonHeight = size === 'tiny' ? 'h-9' : '';
    const buttonWidth = size === 'tiny' ? 'w-9' : '';
    const inputHeight = size === 'tiny' ? 'h-9' : '';
    const inputFontSize = size === 'tiny' ? 'text-sm' : '';
    return {
        buttonHeight,
        buttonWidth,
        inputHeight,
        inputFontSize,
    }
}

export const getVapiHeaderClass = (size: string) => {
    const titleFontSize = size === 'tiny' ? 'text-sm' : '';
    const subtitleFontSize = size === 'tiny' ? 'text-xs' : '';
    const iconSize = size === 'tiny' ? 32 : 40;
    return {
        titleFontSize,
        subtitleFontSize,
        iconSize,
    }
}