import React from 'react'
import { ReactComponent as BillIcon } from '../../assets/ico/ico-bill.svg';
import { ReactComponent as CallIcon } from '../../assets/ico/ico-call.svg';
import { ReactComponent as CardIcon } from '../../assets/ico/ico-card.svg';
import { ReactComponent as ClickIcon } from '../../assets/ico/ico-click.svg';
import { ReactComponent as Data01Icon } from '../../assets/ico/ico-data01.svg';
import { ReactComponent as Data02Icon } from '../../assets/ico/ico-data02.svg';
import { ReactComponent as Data03Icon } from '../../assets/ico/ico-data03.svg';
import { ReactComponent as DbIcon } from '../../assets/ico/ico-db.svg';
import { ReactComponent as DefendIcon } from '../../assets/ico/ico-defend.svg';
import { ReactComponent as DragIcon } from '../../assets/ico/ico-drag.svg';
import { ReactComponent as GoalIcon } from '../../assets/ico/ico-goal.svg';
import { ReactComponent as HeartIcon } from '../../assets/ico/ico-heart.svg';
import { ReactComponent as HistoryIcon } from '../../assets/ico/ico-history.svg';
import { ReactComponent as IdIcon } from '../../assets/ico/ico-id.svg';
import { ReactComponent as MailIcon } from '../../assets/ico/ico-mail.svg';
import { ReactComponent as NeditIcon } from '../../assets/ico/ico-nedit.svg';
import { ReactComponent as NstopIcon } from '../../assets/ico/ico-nstop.svg';
import { ReactComponent as Report01Icon } from '../../assets/ico/ico-report01.svg';
import { ReactComponent as Report02Icon } from '../../assets/ico/ico-report02.svg';
import { ReactComponent as Report03Icon } from '../../assets/ico/ico-report03.svg';
import { ReactComponent as Report04Icon } from '../../assets/ico/ico-report04.svg';
import { ReactComponent as StateIcon } from '../../assets/ico/ico-state.svg';
import { ReactComponent as StorageIcon } from '../../assets/ico/ico-storage.svg';
import { ReactComponent as SyncIcon } from '../../assets/ico/ico-sync.svg';
import { ReactComponent as TalkIcon } from '../../assets/ico/ico-talk.svg';
import { ReactComponent as Up01Icon } from '../../assets/ico/ico-up01.svg';
import { ReactComponent as Up02Icon } from '../../assets/ico/ico-up02.svg';
import { ReactComponent as WriteIcon } from '../../assets/ico/ico-write.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        '& svg': {
            width: "100px",
        }
    }
}))
export { 
    BillIcon, CallIcon, CardIcon, ClickIcon, Data01Icon, Data02Icon, Data03Icon, DbIcon, DefendIcon, DragIcon, GoalIcon, 
    HeartIcon, HistoryIcon, IdIcon, MailIcon, NeditIcon, NstopIcon, Report01Icon, Report02Icon, Report03Icon, Report04Icon, StateIcon,
    StorageIcon, SyncIcon, TalkIcon, Up01Icon, Up02Icon, WriteIcon
}
export default function Icons() {
    const addClasses = useStyles();
    return (
        <div className={addClasses.root}>
                <div>
                    <BillIcon/><CallIcon/><CardIcon/><ClickIcon/><Data01Icon/>
                </div>
                <div>
                    <Data02Icon/><Data03Icon/><DbIcon/><DefendIcon/><DragIcon/>
                </div>
                <div>
                    <GoalIcon/><HeartIcon/><HistoryIcon/><IdIcon/><MailIcon/>
                </div>
                <div>
                    <NeditIcon/><NstopIcon/><Report01Icon/><Report02Icon/><Report03Icon/>
                </div>
                <div>
                    <Report04Icon/><StateIcon/><StorageIcon/><SyncIcon/><TalkIcon/>
                </div>
                <div>
                    <Up01Icon/><Up02Icon/><WriteIcon/>
                </div>
                
        </div>
    )
}
