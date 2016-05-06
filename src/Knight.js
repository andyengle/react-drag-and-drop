import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
    	console.log("I've begun dragging the Knight: ", props);
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={{
                 opacity: isDragging ? 0.5 : 1,
                 fontSize: 25,
                 fontWeight: 'bold',
                 cursor: 'move'
            }}>
            <img style={{ padding: '3px 0 0 3px' }} src="http://localhost:4002/will-and-daddy.png" />
        </div>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
