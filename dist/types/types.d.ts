import { CodeLanguageMap } from "../utils/constants";
export interface PackageManagerSnippetProps {
    command: string;
    packageManager: string;
    packageName: string;
}
export type PackageManagersType = {
    [key: string]: string;
};
export interface PackageManagerProps {
    packageName: string;
}
export type CodeSnippetCodeCopyProps = {
    codeLanguage: keyof typeof CodeLanguageMap;
    codeSnippet: string;
};
export type CommandPasterProps = CodeSnippetCodeCopyProps | PackageManagerProps;
