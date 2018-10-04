import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

router.route('/lanes/:laneId').post(LaneController.editLaneName);

//router.route('/lanes/:laneId').put(LaneController.editLaneNotes);

export default router;
