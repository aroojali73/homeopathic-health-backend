import { NextFunction, Response } from 'express';
import { IUserActivityLogController, IUserActivityLogService } from '../../../types/userActivityLogTypes';
import { RequestWithUser } from '../../../types';
// import { UserRole } from '../../../repositories';

export class UserActivityLogController implements IUserActivityLogController {
    constructor(private userActivityLogService: IUserActivityLogService) {}

    public getUserActivityLogs = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            // if (req.user?.Role !== UserRole.ADMIN && req.user?.Email !== req.params.email) {
            //     throw new ForbiddenError('Permission Denied');
            // }
            const logs = await this.userActivityLogService.getUserActivityLogs(req.user?.Email as string);
            res.status(200).json({ message: 'Logs fetched successfully', logs });
        } catch (error) {
            next(error);
        }
    };
}
