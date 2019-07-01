import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// for all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane for laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Edit a lane 
router.route('/lanes/:laneId').put(LaneController.editLane);

export default router;