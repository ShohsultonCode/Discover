import { IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class nameDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    user_name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    user_subject: string;
}
