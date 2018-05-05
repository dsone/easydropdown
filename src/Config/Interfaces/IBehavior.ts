interface IBehavior {
    showPlaceholderWhenOpen?: boolean;
    openOnFocus?:             boolean;
    closeOnSelect?:           boolean;
    useNativeUiOnMobile?:     boolean;
    loop?:                    boolean;
    clampMaxVisibleItems?:    boolean;
    reactToUpdates?:          boolean;
    maxVisibleItems?:         number;
}

export default IBehavior;